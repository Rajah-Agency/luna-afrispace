import { FileText, Download } from 'lucide-react';
import { Resource } from '../resources.constant';

export function ResourceRow({ resource }: { resource: Resource }) {
  return (
    <div className="flex items-center justify-between px-6 py-5 hover:bg-luna-deep-navy/60 transition-all duration-300 group">
      <div className="flex items-center gap-4 min-w-0">
        <FileText
          size={20}
          className="text-luna-royal-blue group-hover:text-luna-glow-blue transition-colors duration-300 shrink-0"
        />
        <div className="min-w-0">
          <p className="font-heading text-white tracking-wide group-hover:text-luna-glow-blue transition-colors duration-300 truncate">
            {resource.title}
          </p>
          <p className="font-body text-xs text-white/40 mt-1">
            PDF · {resource.sizeMb} MB
          </p>
        </div>
      </div>
      <a
        href={resource.fileUrl}
        download
        className="flex items-center gap-2 font-heading text-xs tracking-widest text-luna-glow-blue border border-luna-royal-blue/40 hover:border-luna-glow-blue hover:bg-luna-royal-blue/20 px-4 py-2 transition-all duration-300 shrink-0 ml-6"
      >
        <Download size={14} />
        DOWNLOAD
      </a>
    </div>
  );
}
