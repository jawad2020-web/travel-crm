import { computed, onMounted, reactive, toRefs } from 'vue';

interface Battery {
  charging: boolean; // Whether the current battery is charging
  chargingTime: number; // how many seconds until the charging is complete, if it is 0, the charging is complete
  dischargingTime: number; // Represents how many seconds until the battery drains to empty and hangs
  level: number; // Represents the amplification level of the power, this value is between 0.0 and 1.0
  [key: string]: any;
}

export const useBattery = () => {
  const state = reactive({
    battery: {
      charging: false,
      chargingTime: 0,
      dischargingTime: 0,
      level: 100,
    },
  });

  // Update the battery usage status
  const updateBattery = (target) => {
    for (const key in state.battery) {
      state.battery[key] = target[key];
    }
    state.battery.level = state.battery.level * 100;
  };

  // Calculate the remaining available time of the battery
  const calcDischargingTime = computed(() => {
    const hour = state.battery.dischargingTime / 3600;
    const minute = (state.battery.dischargingTime / 60) % 60;
    return `${~~hour} hour ${~~minute} minute`;
  });

  // Calculate the remaining time for the battery to be fully charged
  const calcChargingTime = computed(() => {
    console.log(state.battery);
    const hour = state.battery.chargingTime / 3600;
    const minute = (state.battery.chargingTime / 60) % 60;
    return `${~~hour} hour ${~~minute} minute`;
  });

  // battery status
  const batteryStatus = computed(() => {
    if (state.battery.charging && state.battery.level >= 100) {
      return 'full';
    } else if (state.battery.charging) {
      return 'charging';
    } else {
      return 'The power has been disconnected';
    }
  });

  onMounted(async () => {
    const BatteryManager: Battery = await (window.navigator as any).getBattery();
    updateBattery(BatteryManager);

    // Called when the battery charge status is updated
    BatteryManager.onchargingchange = ({ target }) => {
      updateBattery(target);
    };
    // Called when the battery charging time is updated
    BatteryManager.onchargingtimechange = ({ target }) => {
      updateBattery(target);
    };
    // Called when the battery is disconnected and the charging time is updated
    BatteryManager.ondischargingtimechange = ({ target }) => {
      updateBattery(target);
    };
    // Called when the battery level is updated
    BatteryManager.onlevelchange = ({ target }) => {
      updateBattery(target);
    };

    // new Intl.DateTimeFormat('zh', {
    //   year: 'numeric',
    //   month: '2-digit',
    //   day: '2-digit',
    //   hour: '2-digit',
    //   minute: '2-digit',
    //   second: '2-digit',
    //   hour12: false
    // }).format(new Date())
  });

  return {
    ...toRefs(state),
    batteryStatus,
    calcDischargingTime,
    calcChargingTime,
  };
};
