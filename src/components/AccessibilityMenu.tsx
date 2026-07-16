import { useState, useEffect } from 'react';
import { useAccessibility } from '@/lib/AccessibilityContext';
import { 
  Accessibility, 
  RotateCcw, 
  X, 
  Type, 
  Link as LinkIcon, 
  ArrowUpDown, 
  ArrowLeftRight,
  Sun,
  Contrast,
  Droplet,
  MousePointer2,
  Eye,
  PauseCircle,
  Languages,
  Volume2,
  Mic,
  Keyboard
} from 'lucide-react';

export const AccessibilityMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isShortcutsOpen, setIsShortcutsOpen] = useState(false);
  const { state, dispatch, reset } = useAccessibility();
  
  // Reading mask state
  const [maskY, setMaskY] = useState(0);

  useEffect(() => {
    if (state.readingMask) {
      const handleMouseMove = (e: MouseEvent) => {
        setMaskY(e.clientY);
      };
      window.addEventListener('mousemove', handleMouseMove);
      return () => window.removeEventListener('mousemove', handleMouseMove);
    }
  }, [state.readingMask]);

  // Read page TTS
  const [isReading, setIsReading] = useState(false);
  const synth = typeof window !== 'undefined' ? window.speechSynthesis : null;

  const toggleReadPage = () => {
    if (!synth) return;
    if (isReading) {
      synth.cancel();
      setIsReading(false);
    } else {
      const text = document.body.innerText;
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.onend = () => setIsReading(false);
      synth.speak(utterance);
      setIsReading(true);
    }
  };

  useEffect(() => {
    return () => {
      if (synth) synth.cancel();
    };
  }, [synth]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (isShortcutsOpen) setIsShortcutsOpen(false);
        else if (isOpen) setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, isShortcutsOpen]);

  const FeatureButton = ({ 
    active, 
    onClick, 
    icon: Icon, 
    label 
  }: { 
    active: boolean, 
    onClick: () => void, 
    icon: any, 
    label: string 
  }) => (
    <button
      onClick={onClick}
      className={`flex flex-col items-center justify-center p-3 rounded-xl border transition-all ${
        active 
          ? 'bg-primary/10 border-primary text-primary dark:bg-primary/20 dark:border-primary/50 dark:text-primary' 
          : 'bg-white border-gray-200 text-gray-700 hover:bg-gray-50 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-700'
      }`}
    >
      <Icon className="w-6 h-6 mb-2" />
      <span className="text-xs font-medium text-center">{label}</span>
    </button>
  );

  return (
    <>
      {/* Floating Trigger Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed z-50 bottom-12 left-4 p-4 bg-primary hover:bg-primary/90 text-white rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105"
          aria-label="Open Accessibility Menu"
        >
          <Accessibility className="w-6 h-6" />
        </button>
      )}

      {/* Reading Mask Overlay */}
      {state.readingMask && (
        <div 
          className="fixed inset-0 z-[9998] pointer-events-none"
          style={{
            background: `
              linear-gradient(to bottom, 
                rgba(0,0,0,0.5) 0%, 
                rgba(0,0,0,0.5) ${maskY - 50}px, 
                transparent ${maskY - 50}px, 
                transparent ${maskY + 50}px, 
                rgba(0,0,0,0.5) ${maskY + 50}px, 
                rgba(0,0,0,0.5) 100%
              )
            `
          }}
        />
      )}

      {/* Menu Panel */}
      <div 
        className={`fixed z-[9999] top-0 left-0 h-full w-80 bg-white dark:bg-gray-900 shadow-2xl flex flex-col transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b dark:border-gray-800">
          <div className="flex items-center gap-2 text-primary">
            <Accessibility className="w-5 h-5" />
            <h2 className="font-semibold text-lg">Accessibility</h2>
          </div>
          <div className="flex items-center gap-2">
            <button 
              onClick={() => { reset(); synth?.cancel(); setIsReading(false); }}
              className="p-2 text-gray-500 hover:text-primary transition-colors"
              title="Reset Settings"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
            <button 
              onClick={() => setIsOpen(false)}
              className="p-2 text-gray-500 hover:text-primary transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-4 space-y-6 scrollbar-hide">
          
          {/* Scaling */}
          <div className="flex bg-gray-50 dark:bg-gray-800 rounded-xl p-1">
            {[100, 110, 125, 150].map((scale) => (
              <button
                key={scale}
                onClick={() => dispatch({ scale })}
                className={`flex-1 py-2 text-sm font-medium rounded-lg transition-all ${
                  state.scale === scale 
                    ? 'bg-white dark:bg-gray-700 shadow text-primary' 
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
                }`}
              >
                {scale}%
              </button>
            ))}
          </div>

          {/* READABILITY */}
          <section>
            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Readability</h3>
            <div className="grid grid-cols-2 gap-3">
              <FeatureButton active={state.dyslexiaFont} onClick={() => dispatch({ dyslexiaFont: !state.dyslexiaFont })} icon={Type} label="Dyslexia Font" />
              <FeatureButton active={state.highlightLinks} onClick={() => dispatch({ highlightLinks: !state.highlightLinks })} icon={LinkIcon} label="Highlight Links" />
              <FeatureButton active={state.lineHeight} onClick={() => dispatch({ lineHeight: !state.lineHeight })} icon={ArrowUpDown} label="Line Height" />
              <FeatureButton active={state.letterSpacing} onClick={() => dispatch({ letterSpacing: !state.letterSpacing })} icon={ArrowLeftRight} label="Letter Spacing" />
            </div>
          </section>

          {/* VISUALS */}
          <section>
            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Visuals</h3>
            <div className="grid grid-cols-2 gap-3">
              <FeatureButton active={state.highContrast} onClick={() => dispatch({ highContrast: !state.highContrast })} icon={Sun} label="High Contrast" />
              <FeatureButton active={state.invertColors} onClick={() => dispatch({ invertColors: !state.invertColors })} icon={Contrast} label="Invert Colors" />
              <FeatureButton active={state.grayscale} onClick={() => dispatch({ grayscale: !state.grayscale })} icon={Droplet} label="Grayscale" />
            </div>
          </section>

          {/* FOCUS & NAVIGATION */}
          <section>
            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Focus & Navigation</h3>
            <div className="grid grid-cols-2 gap-3">
              <FeatureButton active={state.bigCursor} onClick={() => dispatch({ bigCursor: !state.bigCursor })} icon={MousePointer2} label="Big Cursor" />
              <FeatureButton active={state.readingMask} onClick={() => dispatch({ readingMask: !state.readingMask })} icon={Eye} label="Reading Mask" />
              <FeatureButton active={state.stopMotion} onClick={() => dispatch({ stopMotion: !state.stopMotion })} icon={PauseCircle} label="Stop Motion" />
              <FeatureButton active={false} onClick={() => alert("Translation feature coming soon!")} icon={Languages} label="Translate" />
            </div>
          </section>

          {/* ASSISTANCE TOOLS */}
          <section>
            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Assistance Tools</h3>
            <div className="grid grid-cols-2 gap-3">
              <FeatureButton active={isReading} onClick={toggleReadPage} icon={Volume2} label="Read Page" />
              <FeatureButton active={false} onClick={() => alert("Dictation feature coming soon!")} icon={Mic} label="Dictation" />
            </div>
          </section>

          {/* Shortcuts */}
          <button 
            onClick={() => setIsShortcutsOpen(true)}
            className="w-full mt-4 flex flex-col items-center justify-center p-4 rounded-xl border border-gray-200 bg-white hover:bg-gray-50 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 transition-all"
          >
            <Keyboard className="w-6 h-6 mb-2 text-primary" />
            <span className="text-sm font-medium">Shortcuts</span>
          </button>
          
        </div>
      </div>

      {/* Shortcuts Modal */}
      {isShortcutsOpen && (
        <div className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/50 p-4">
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl w-full max-w-sm overflow-hidden animate-in fade-in zoom-in duration-200">
            <div className="flex items-center justify-between p-4 border-b dark:border-gray-800">
              <div className="flex items-center gap-2">
                <Keyboard className="w-5 h-5 text-primary" />
                <h3 className="font-semibold text-gray-900 dark:text-white">Shortcuts</h3>
              </div>
              <button 
                onClick={() => setIsShortcutsOpen(false)}
                className="p-1 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-4 space-y-3">
              <div className="flex justify-between items-center pb-3 border-b dark:border-gray-800">
                <span className="text-sm text-gray-600 dark:text-gray-300">Navigate</span>
                <span className="px-2.5 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded text-xs font-medium border border-gray-200 dark:border-gray-700">Tab</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b dark:border-gray-800">
                <span className="text-sm text-gray-600 dark:text-gray-300">Action</span>
                <span className="px-2.5 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded text-xs font-medium border border-gray-200 dark:border-gray-700">Enter</span>
              </div>
              <div className="flex justify-between items-center pb-1">
                <span className="text-sm text-gray-600 dark:text-gray-300">Close</span>
                <span className="px-2.5 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded text-xs font-medium border border-gray-200 dark:border-gray-700">Esc</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AccessibilityMenu;
