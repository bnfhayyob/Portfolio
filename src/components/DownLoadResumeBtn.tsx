"use client"
import React from 'react'
import HackerBtn from './animation/HackerBtn'
import { portfolioConfig } from '@/config/portfolio.config'

function DownLoadResumeBtn() {
  const handleDownload = () => {
    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = portfolioConfig.resumePath;
    link.download = 'Ayyoub_Benfatah_Resume.pdf'; // Custom filename for download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="h-fit w-full mt-2 py-2 px-4">
      <HackerBtn label='Download Resume' onClick={handleDownload} />
    </div>
  )
}

export default DownLoadResumeBtn