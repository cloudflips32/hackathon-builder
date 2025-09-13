import { Menu, User } from "lucide-react";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export default function MobileHeader() {
  return (
    <header className="flex items-center justify-between p-4 bg-card border-b">
      {/* Hamburger Menu */}
      <Button variant="ghost" size="icon" className="flex-shrink-0">
        <Menu className="h-6 w-6" />
      </Button>
      
      {/* Logo */}
      <div className="flex-1 flex justify-center">
        <div className="w-12 h-12 rounded-lg overflow-hidden">
        </div>
      </div>
      
      {/* Avatar */}
      <Avatar className="flex-shrink-0 w-10 h-10">
        <AvatarImage src="" alt="User" />
        <AvatarFallback>
          <User className="h-5 w-5" />
        </AvatarFallback>
      </Avatar>
    </header>
  );
}