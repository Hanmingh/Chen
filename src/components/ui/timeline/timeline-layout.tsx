import React from 'react';
import { Timeline, TimelineItem } from './timeline';
import { motion } from 'framer-motion';
import { CheckCircle2Icon, Loader2Icon, ClockIcon } from 'lucide-react';
import { ReactNode } from 'react';

type TimelineSize = 'sm' | 'md' | 'lg';
type TimelineStatus = 'completed' | 'in-progress' | 'pending';
type TimelineColor = 'primary' | 'secondary' | 'muted' | 'accent' | 'destructive';

interface TimelineElement {
  id: number;
  date: string;
  title: string;
  description: string;
  link?: string;
  icon?: ReactNode | (() => ReactNode);
  color?: TimelineColor;
  size?: TimelineSize;
  loading?: boolean;
  error?: string;
}

interface TimelineLayoutProps {
  items: TimelineElement[];
  size?: TimelineSize;
  iconColor?: TimelineColor;
  customIcon?: React.ReactNode;
  animate?: boolean;
  connectorColor?: TimelineColor;
  className?: string;
}

export const TimelineLayout = ({
  items,
  size = 'md',
  iconColor,
  customIcon,
  animate = true,
  connectorColor,
  className,
}: TimelineLayoutProps) => {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  return (
    <Timeline size={size} className={className}>
      {items.map((item, index) => {
        const parts = item.date.split(/\s*[–-]\s*/);
        let startDate: Date;
        let endDate: Date;
        if (parts.length === 2) {
          const sd = new Date(parts[0]);
          startDate = new Date(sd.getFullYear(), sd.getMonth(), sd.getDate());
          const ed = new Date(parts[1]);
          endDate = new Date(ed.getFullYear(), ed.getMonth(), ed.getDate());
        } else {
          const d = new Date(item.date);
          startDate = new Date(d.getFullYear(), d.getMonth(), d.getDate());
          endDate = startDate;
        }

        let status: TimelineStatus;
        if (today > endDate) {
          status = 'completed';
        } else if (today < startDate) {
          status = 'pending';
        } else {
          status = 'in-progress';
        }

        const statusIcon = item.icon
          ? typeof item.icon === 'function'
            ? item.icon()
            : item.icon
          : status === 'completed'
          ? <CheckCircle2Icon />
          : status === 'in-progress'
          ? <Loader2Icon className="animate-spin" />
          : <ClockIcon />;

        const titleNode = item.link ? (
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            {item.title}
          </a>
        ) : (
          item.title
        );

        return (
          <motion.div
            key={item.id}
            initial={animate ? { opacity: 0, y: 20 } : false}
            animate={animate ? { opacity: 1, y: 0 } : false}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
              ease: 'easeOut',
            }}
          >
            <TimelineItem
              date={item.date}
              title={titleNode}
              description={item.description}
              icon={statusIcon}
              iconColor={item.color || iconColor}
              connectorColor={item.color || connectorColor}
              showConnector={index !== items.length - 1}
            />
          </motion.div>
        );
      })}
    </Timeline>
  );
};