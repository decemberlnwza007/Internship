import React, { useState } from 'react';
import { 
  Home, 
  FileText, 
  Users, 
  Settings, 
  LogOut, 
  ChevronRight,
  Building2,
  Award,
  Clock,
  User,
  Menu,
  X
} from 'lucide-react';

export default function Sidebar() {
  const [activeItem, setActiveItem] = useState('หน้าแรก');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { 
      label: 'หน้าแรก', 
      icon: Home, 
      color: 'text-blue-600',
      bg: 'bg-gradient-to-r from-blue-50 to-blue-100/80',
      glow: 'shadow-blue-200/50'
    },
    { 
      label: 'เอกสารฝึกงาน', 
      icon: FileText, 
      color: 'text-emerald-600',
      bg: 'bg-gradient-to-r from-emerald-50 to-emerald-100/80',
      glow: 'shadow-emerald-200/50'
    },
    { 
      label: 'รายงานความก้าวหน้า', 
      icon: Award, 
      color: 'text-purple-600',
      bg: 'bg-gradient-to-r from-purple-50 to-purple-100/80',
      glow: 'shadow-purple-200/50',
      badge: 3
    },
    { 
      label: 'ตารางเวลา', 
      icon: Clock, 
      color: 'text-amber-600',
      bg: 'bg-gradient-to-r from-amber-50 to-amber-100/80',
      glow: 'shadow-amber-200/50'
    },
    { 
      label: 'ผู้ดูแล/พี่เลี้ยง', 
      icon: Users, 
      color: 'text-indigo-600',
      bg: 'bg-gradient-to-r from-indigo-50 to-indigo-100/80',
      glow: 'shadow-indigo-200/50'
    },
    { 
      label: 'ข้อมูลส่วนตัว', 
      icon: User, 
      color: 'text-teal-600',
      bg: 'bg-gradient-to-r from-teal-50 to-teal-100/80',
      glow: 'shadow-teal-200/50'
    },
    { 
      label: 'ตั้งค่า', 
      icon: Settings, 
      color: 'text-slate-600',
      bg: 'bg-gradient-to-r from-slate-50 to-slate-100/80',
      glow: 'shadow-slate-200/50'
    }
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleItemClick = (label: string) => {
    setActiveItem(label);
    closeMobileMenu();
  };

  return (
    <>
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <button
          onClick={toggleMobileMenu}
          className="p-3 bg-white/95 backdrop-blur-md rounded-xl shadow-lg border border-slate-200/60 hover:shadow-xl transition-all duration-300"
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6 text-slate-700" />
          ) : (
            <Menu className="h-6 w-6 text-slate-700" />
          )}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300"
          onClick={closeMobileMenu}
        />
      )}

      <div className={`
        fixed lg:static inset-y-0 left-0 z-40
        w-80 sm:w-72 md:w-80
        flex flex-col 
        bg-gradient-to-b from-white via-slate-50/30 to-white 
        border-r border-slate-200/60 
        shadow-xl shadow-slate-200/20 
        backdrop-blur-sm
        transform transition-transform duration-300 ease-out
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        
        <div className="px-4 sm:px-6 py-4 sm:py-6 border-b border-white/20 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-700 relative shrink-0">
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
          <div className="flex items-center space-x-3 relative z-10">
            <div className="p-2 sm:p-2.5 bg-white/25 rounded-xl sm:rounded-2xl backdrop-blur-md border border-white/20 shadow-lg shrink-0">
              <Building2 className="h-6 w-6 sm:h-8 sm:w-8 text-white drop-shadow-sm" />
            </div>
            <div className="min-w-0 flex-1">
              <h1 className="text-lg sm:text-xl font-bold text-white leading-tight drop-shadow-sm truncate">
                ระบบฝึกงาน
              </h1>
              <p className="text-blue-100/80 text-xs mt-0.5 hidden sm:block">Internship System</p>
            </div>
          </div>
        </div>

        <nav className="flex-1 px-3 sm:px-5 py-4 sm:py-8 space-y-2 sm:space-y-3 overflow-y-auto min-h-0">
          {menuItems.map(({ label, icon: Icon, color, bg, glow, badge }) => {
            const isActive = activeItem === label;
            return (
              <div
                key={label}
                onClick={() => handleItemClick(label)}
                className={`
                  group relative flex items-center 
                  px-3 sm:px-5 py-3 sm:py-4 
                  rounded-xl sm:rounded-2xl cursor-pointer
                  transition-all duration-300 ease-out focus:outline-none
                  ${isActive 
                    ? `${bg} border-0 shadow-lg ${glow} transform scale-[1.02] translate-x-1` 
                    : 'hover:bg-slate-50/70 hover:shadow-md hover:transform hover:scale-[1.01] hover:translate-x-0.5'
                  }
                `}
              >
                {isActive && (
                  <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 sm:w-1.5 h-8 sm:h-10 bg-gradient-to-b from-blue-500 via-blue-600 to-blue-700 rounded-r-full shadow-sm" />
                )}
                
                <div className={`
                  flex items-center justify-center 
                  w-9 h-9 sm:w-11 sm:h-11 
                  rounded-lg sm:rounded-xl 
                  mr-3 sm:mr-4 
                  transition-all duration-300 shrink-0
                  ${isActive 
                    ? 'bg-white/90 shadow-lg backdrop-blur-sm border border-white/50' 
                    : 'bg-slate-100/70 group-hover:bg-white/80 group-hover:shadow-md'
                  }
                `}>
                  <Icon className={`h-4 w-4 sm:h-5 sm:w-5 transition-all duration-300 ${isActive ? color : 'text-slate-600 group-hover:text-slate-700'}`} />
                </div>
                
                <span className={`
                  flex-1 font-semibold text-xs sm:text-sm leading-relaxed transition-all duration-300 min-w-0
                  ${isActive ? 'text-slate-800' : 'text-slate-700 group-hover:text-slate-800'}
                `}>
                  <span className="truncate block">{label}</span>
                </span>
                
                {badge && (
                  <div className="flex items-center justify-center min-w-[22px] sm:min-w-[26px] h-6 sm:h-7 px-2 sm:px-2.5 bg-gradient-to-r from-red-500 to-red-600 text-white text-xs font-bold rounded-full shadow-lg shadow-red-200/50 border border-red-400/20 ml-2 shrink-0">
                    {badge}
                  </div>
                )}
                
                {isActive && (
                  <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4 text-slate-400 ml-2 transition-transform duration-300 group-hover:translate-x-0.5 shrink-0" />
                )}
              </div>
            );
          })}
        </nav>

        <div className="px-3 sm:px-5 py-3 sm:py-5 border-t border-slate-200/50 bg-gradient-to-r from-slate-50/50 to-transparent shrink-0">
          <div className="flex items-center space-x-3 sm:space-x-4 px-3 sm:px-4 py-3 sm:py-4 rounded-xl sm:rounded-2xl bg-white/80 backdrop-blur-sm border border-slate-200/50 shadow-lg shadow-slate-200/20">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-600 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg shadow-blue-200/30 shrink-0">
              <span className="text-white font-bold text-xs sm:text-sm drop-shadow-sm">นศ</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs sm:text-sm font-bold text-slate-800 truncate">
                นายพงศกร ทองรักษ์
              </p>
              <p className="text-xs text-slate-500 truncate mt-0.5">
                นักศึกษาฝึกงาน
              </p>
            </div>
          </div>
        </div>

        <div className="px-3 sm:px-5 pb-3 sm:pb-5 shrink-0">
          <button 
            onClick={closeMobileMenu}
            className="w-full flex items-center px-3 sm:px-5 py-3 sm:py-4 text-red-600 hover:text-red-700 hover:bg-red-50/70 rounded-xl sm:rounded-2xl transition-all duration-300 group focus:outline-none hover:shadow-md"
          >
            <LogOut className="h-4 w-4 sm:h-5 sm:w-5 mr-3 sm:mr-4 group-hover:transform group-hover:translate-x-1 transition-all duration-300 shrink-0" />
            <span className="font-semibold text-xs sm:text-sm">ออกจากระบบ</span>
          </button>
        </div>
      </div>
    </>
  );
}