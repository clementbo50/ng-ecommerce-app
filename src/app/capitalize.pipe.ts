import { Pipe, PipeTransform } from '@angular/core';

/**
 * Transforme la première lettre de chaque mot en majuscule.
 * Utilisé pour formater les noms de produits, les genres, les categories, etc.
 * 
 * @see https://angular.io/api/core/Pipe
 */
@Pipe({
  name: 'capitalize',
  standalone: true
})
export class CapitalizePipe implements PipeTransform {

  /**
   * Transforme la première lettre de chaque mot en majuscule.
   * 
   * @param {string} value - La chaîne à transformer.
   * @returns {string} La chaîne transformée.
   */
  transform(value: string): string {
    if (!value) return value;

    // On remplace chaque première lettre d'un mot par sa version en majuscule.
    return value.replace(/\b\w/g, (firstLetter) => firstLetter.toUpperCase());
  }
}

