export let Isphone: boolean;
if (typeof window !== "undefined") {
  const userAgent = window.navigator.userAgent;
  Isphone =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      userAgent
    );
}

