"use client";

import { ShoppingCart } from "lucide-react";
import { useEffect, useState } from "react";

const notifications = [
  "Maria de São Paulo, SP",
  "João de Belo Horizonte, MG",
  "Ana de Salvador, BA",
  "Pedro do Rio de Janeiro, RJ",
  "Sofia de Curitiba, PR",
];

export const NotificationPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [notification, setNotification] = useState("");

  useEffect(() => {
    const showRandomNotification = () => {
      const randomNotification = notifications[Math.floor(Math.random() * notifications.length)];
      const randomTime = Math.floor(Math.random() * 5) + 1;
      setNotification(`${randomNotification} acabou de comprar há ${randomTime} minutos.`);
      setIsVisible(true);

      setTimeout(() => {
        setIsVisible(false);
      }, 5000); // Popup stays visible for 5 seconds
    };

    // Show the first notification after 5 seconds
    const initialTimeout = setTimeout(showRandomNotification, 5000);

    // Then show a new one every 10 seconds
    const interval = setInterval(showRandomNotification, 10000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className={`fixed bottom-4 left-4 z-50 bg-white rounded-lg shadow-lg p-4 border transition-transform duration-500 ${isVisible ? 'translate-x-0' : '-translate-x-full'} hidden md:block`}>
      <div className="flex items-center gap-3">
        <ShoppingCart className="text-blue-500" />
        <div>
          <p className="font-bold text-sm text-slate-800">{notification.split("acabou")[0]}</p>
          <p className="text-xs text-slate-600">acabou de comprar.</p>
        </div>
      </div>
    </div>
  );
};