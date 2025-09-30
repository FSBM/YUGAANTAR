import { create } from 'zustand';

interface CountdownStore {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  calculateTimeLeft: () => void;
}

const calculateTimeDifference = () => {
  const targetDate = new Date('November 1, 2025').getTime();
  const now = new Date().getTime();
  const difference = targetDate - now;
// should return 0 if target date is passed
  return {
    days: difference > 0 ? Math.floor(difference / (1000 * 60 * 60 * 24)) : 0,
    hours: difference > 0 ? Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) : 0,
    minutes: difference > 0 ? Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)) : 0,
    seconds: difference > 0 ? Math.floor((difference % (1000 * 60)) / 1000) : 0
  };
};

export const useCountdownStore = create<CountdownStore>((set) => ({
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
  calculateTimeLeft: () => {
    const timeLeft = calculateTimeDifference();
    set(timeLeft);
  },
}));