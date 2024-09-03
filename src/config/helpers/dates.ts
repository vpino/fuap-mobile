export function formatDateTwoDigit(fecha?: string | Date): string {
  if (!fecha) {
    return '';
  }

  const date = new Date(fecha);

  return date.toLocaleDateString('es-ES', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });
}
