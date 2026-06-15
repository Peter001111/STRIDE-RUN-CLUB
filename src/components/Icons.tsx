import React from "react";
import {
  Flame,
  Users2,
  TrendingUp,
  Trophy,
  Calendar,
  Footprints,
  Clock,
  Smartphone,
  MessageSquareText,
  Award,
  CheckCircle2,
  Copy,
  Check,
  Phone,
  Instagram,
  ExternalLink,
  Menu,
  X,
  Sparkles,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Plus,
  Minus,
  HelpCircle
} from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Flame,
  Users2,
  TrendingUp,
  Trophy,
  Calendar,
  Footprints,
  Clock,
  Smartphone,
  MessageSquareText,
  Award,
  CheckCircle2,
  Copy,
  Check,
  Phone,
  Instagram,
  ExternalLink,
  Menu,
  X,
  Sparkles,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Plus,
  Minus,
  HelpCircle
};


export function Icon({ name, className }: { name: string; className?: string }) {
  const IconComponent = iconMap[name];
  if (!IconComponent) return null;
  return <IconComponent className={className} />;
}
