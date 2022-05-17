const main = async () => {
  try {
    await window.liff.init({ liffId: "1655827505-r1XyoXd5" });
    alert("init done");
    const profile = await window.liff.getProfile();
    window.alert(`hello ${profile.displayName}`)
  } catch (e) {
    console.error("init failed", e);
    alert("failed")
  }
};

main();
