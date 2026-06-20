import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Eye, MousePointerClick, Download, FolderOpen } from 'lucide-react';

export default function Analytics() {
  const [profileViews, setProfileViews] = useState(0);
  const [projectClicks, setProjectClicks] = useState(0);
  const [resumeDownloads, setResumeDownloads] = useState(0);
  const [totalProjectClicks, setTotalProjectClicks] = useState(0);

  const handleSimulateView = () => {
    setProfileViews(prev => prev + 1);
  };

  const handleSimulateProjectClick = () => {
    setProjectClicks(prev => prev + 1);
    setTotalProjectClicks(prev => prev + 1);
  };

  const handleSimulateDownload = () => {
    setResumeDownloads(prev => prev + 1);
  };

  const stats = [
    {
      title: 'Profile Views',
      value: profileViews,
      icon: Eye,
      description: 'Total profile visits',
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/10',
      action: handleSimulateView,
      actionLabel: 'Simulate View'
    },
    {
      title: 'Project Clicks',
      value: projectClicks,
      icon: MousePointerClick,
      description: 'Individual project clicks',
      color: 'text-green-500',
      bgColor: 'bg-green-500/10',
      action: handleSimulateProjectClick,
      actionLabel: 'Simulate Click'
    },
    {
      title: 'Resume Downloads',
      value: resumeDownloads,
      icon: Download,
      description: 'Total resume downloads',
      color: 'text-purple-500',
      bgColor: 'bg-purple-500/10',
      action: handleSimulateDownload,
      actionLabel: 'Simulate Download'
    },
    {
      title: 'Total Project Clicks',
      value: totalProjectClicks,
      icon: FolderOpen,
      description: 'All project interactions',
      color: 'text-orange-500',
      bgColor: 'bg-orange-500/10',
      action: handleSimulateProjectClick,
      actionLabel: 'Simulate Click'
    }
  ];

  return (
    null
  );
}