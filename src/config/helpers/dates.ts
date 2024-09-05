export function formatDateTwoDigit(fecha?: string | Date): string {
  if (!fecha) {
    return '';
  }

  const date = new Date(fecha);

  if (validDate(date)) {
    return '';
  }

  return date.toLocaleDateString('es-ES', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });
}

export const formatDayMonth = (dateString: string | Date): string => {
  if (!dateString) {
    return '';
  }

  const date = new Date(dateString);

  if (validDate(date)) {
    return '';
  }

  const formattedDate = date.toLocaleDateString('es-ES', {
    day: '2-digit',
    month: '2-digit',
  });

  return formattedDate;
};

export const validDate = (dateString: Date): boolean => {
  return isNaN(dateString.getTime());
};
