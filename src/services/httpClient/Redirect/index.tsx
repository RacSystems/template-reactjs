import React, { useCallback, useEffect } from 'react';

import RedirectManager from './RedirectManager';

export function callRedirect(): void {
  const ref = RedirectManager.getDefault();

  if (ref) {
    ref.redirect();
  }
}

const Redirect: React.FC = () => {
  const redirect = useCallback(() => {
    // TODO: Lógica para remover usuário autenticado
  }, []);

  useEffect(() => {
    RedirectManager.register({ redirect });
  }, [redirect]);

  return <></>;
};

export default Redirect;
