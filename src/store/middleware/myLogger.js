export const myLogger = (store) => (next) => (action) => {
  console.log("[Middleware] Şimdiki state:", store.getState());
  console.log("[Middleware] Şu aksiyon dispatch edilecek:", action);
  if (true || store.getState().global.userName) {
    const result = next(action);
    return result;
  } else {
    console.error(
      `${action.type} işlemini gerçekleştirebilmek için lütfen login olunuz...`
    );
  }
  console.log("[Middleware] Sonraki state:", store.getState());
};
