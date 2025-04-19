
import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { Toggle } from './ui/toggle';
import { HoverCard, HoverCardContent, HoverCardTrigger } from './ui/hover-card';
import { useTheme } from 'next-themes';

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Only show the toggle after component is mounted (to avoid hydration mismatch)
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Toggle 
          aria-label="Toggle theme" 
          pressed={theme === 'dark'}
          onPressedChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          className="w-10 h-10 rounded-full bg-background border-muted-foreground/20 border transition-all hover:shadow-md"
        >
          <Sun className={`h-5 w-5 transition-all ${theme === 'light' ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'} absolute`} />
          <Moon className={`h-4 w-4 transition-all ${theme === 'dark' ? 'opacity-100 rotate-0' : 'opacity-0 rotate-90'} absolute`} />
        </Toggle>
      </HoverCardTrigger>
      <HoverCardContent className="w-auto" side="bottom">
        <p className="text-sm">
          {theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
        </p>
      </HoverCardContent>
    </HoverCard>
  );
};

export default ThemeToggle;
