import { ref, onMounted, onUnmounted } from 'vue';

/**
 * @description Whether the user network is available
 * */
export function useOnline() {
  const online = ref(true);

  const showStatus = (val) => {
    online.value = typeof val == 'boolean' ? val : val.target.online;
  };

  // After the page loads, set the correct network state
  navigator.onLine ? showStatus(true) : showStatus(false);

  onMounted(() => {
    // Start listening for network status changes
    window.addEventListener('online', showStatus);

    window.addEventListener('offline', showStatus);
  });
  onUnmounted(() => {
    // Remove the listener for network status changes
    window.removeEventListener('online', showStatus);

    window.removeEventListener('offline', showStatus);
  });

  return { online };
}
