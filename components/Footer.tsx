import { MountainIcon } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-background border-t">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <MountainIcon className="h-8 w-8 text-primary" />
            <span className="ml-2 text-xl font-bold">Mountain Trek Guides</span>
          </div>
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Mountain Trek Guides. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;