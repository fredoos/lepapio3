// Convertit une date au format français (JJ/MM/AA HH:MM) en objet Date
export function parseFrenchDate(dateStr: string): Date | null {
  if (!dateStr || dateStr.trim() === '') return null;

  // Format attendu : JJ/MM/AA HH:MM
  // Exemple : 24/12/25 18:00
  const match = dateStr.match(/^(\d{2})\/(\d{2})\/(\d{2})\s+(\d{2}):(\d{2})$/);

  if (!match) return null;

  const [, day, month, year, hours, minutes] = match;

  // Convertir l'année à deux chiffres en année complète
  // 00-49 -> 2000-2049
  // 50-99 -> 1950-1999
  const fullYear = parseInt(year) < 50 ? 2000 + parseInt(year) : 1900 + parseInt(year);

  // Les mois en JavaScript sont indexés de 0 à 11
  const date = new Date(
    fullYear,
    parseInt(month) - 1,
    parseInt(day),
    parseInt(hours),
    parseInt(minutes),
    0
  );

  // Vérifier si la date est valide
  if (isNaN(date.getTime())) return null;

  return date;
}
