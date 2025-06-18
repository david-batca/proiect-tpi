const isActive = ref(false);
const message = ref(null);
const color = ref(null);

export const useSnackbar = () => {
  const show = (msg, status) => {
    message.value = msg;

    if (status === "success") color.value = "light-green-darken-4";
    else color.value = "deep-orange-accent-4";

    isActive.value = true;
  };

  return { isActive, message, color, show };
};
