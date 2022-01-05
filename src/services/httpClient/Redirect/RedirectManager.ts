interface IRef {
  redirect(): void;
}

class RedirectManager {
  defaultRedirect: IRef | null = null;

  register(ref: IRef) {
    if (ref) {
      this.defaultRedirect = ref;
    }
  }

  getDefault() {
    return this.defaultRedirect;
  }
}
export default new RedirectManager();
