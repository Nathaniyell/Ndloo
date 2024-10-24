import logo from "@/assets/images/ndloo-logo.png";
import asideImg from "@/assets/images/hero2.png";
import matchesIcon from "@/assets/icons/lovely.png";
import walletIcon from "@/assets/icons/wallet-money.svg";
import lockIcon from "@/assets/icons/lock.svg";
import diamondIcon from "@/assets/icons/diamonds.svg";
import smsIcon from "@/assets/icons/sms-edit.svg";
import whoLikesIcon from "@/assets/icons/like.png";
import disklikesIcon from "@/assets/icons/dislike.png";
import likesIcon from "@/assets/icons/heart.png";
import messageIcon from "@/assets/icons/messages.png";
import blockedIcon from "@/assets/icons/blocked.png";
import boostIcon from "@/assets/icons/boost.png";
import logoutIcon from "@/assets/icons/logout.png";
import settingsIcon from "@/assets/icons/setting.png";
import profilePicture from "@/assets/images/profile-pics.png";
import bgDesigned from "@/assets/images/bg-designed.png";
import filterIcon from "@/assets/icons/filter-edit.svg"
import caretIcon from "@/assets/icons/caret-right.svg"
import moreIcon from "@/assets/icons/more.svg"


export const navItems = [
    { path: '/dashboard/', label: 'My Matches', icon: matchesIcon },
    { path: '/dashboard/messages', label: 'Messages', icon: messageIcon },
    { path: '/dashboard/likes', label: 'My Likes', icon: likesIcon },
    { path: '/dashboard/who-likes-me', label: 'Who Likes Me', icon: whoLikesIcon },
    { path: '/dashboard/dislikes', label: 'My Dislikes', icon: disklikesIcon },
    { path: '/dashboard/blocked', label: 'Blocked Users', icon: blockedIcon },
    { path: '/dashboard/boost-profile', label: 'Boost Profile', icon: boostIcon },
  ];
  
  export const moreItems = [
    { path: '', label: 'Upgrade', icon: diamondIcon },
    { path: '/dashboard/wallet', label: 'Wallet', icon: walletIcon },
    { path: '/dashboard/settings', label: 'Settings', icon: settingsIcon },
    { path: '/dashboard/settings', label: 'Change Email', icon: smsIcon },
    { path: '/dashboard/settings', label: 'Change Password', icon: lockIcon },
  ]

  export const getHeaderText = (path) => {
    switch (path) {
      case "/dashboard/likes": return "My Likes";
      case "/dashboard/wallet": return "Wallet";
      case "/dashboard/who-likes-me": return "Who Likes Me";
      case "/dashboard/blocked": return "Blocked Users";
      case "/dashboard/settings": return "Settings";
      case "/dashboard/profile": return "Profile";
      case "/dashboard/dislikes": return "My Dislikes";
      case "/dashboard/boost-profile": return "Boost Profile";
      default: return "Welcome Back, Virtue";
    }
  };
export {bgDesigned, profilePicture,settingsIcon,logoutIcon,boostIcon,likesIcon,messageIcon,disklikesIcon, blockedIcon,whoLikesIcon,smsIcon,diamondIcon,lockIcon,walletIcon,matchesIcon,asideImg,logo, filterIcon, caretIcon, moreIcon}