import { Directive, ElementRef, HostListener } from '@angular/core';
/**
 * Directive personnalisée pour changer la couleur de fond d'un élément lorsqu'on survole la souris dessus.
 */
@Directive({
  selector: '[appCustomDirective]', // Sélecteur pour l'utilisation de la directive
  standalone: true // Permet de rendre la directive indépendante du module principal
})
export class CustomDirectiveDirective {
  //On appelle le service ElementRef pour modifier la couleur de fond (La notion de service sera abordés bientot !)
  constructor(private el: ElementRef) { }

  /**
   * Événement déclenché lorsque la souris se positionne sur l'élément.
   */
  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('yellow'); // Définit la couleur de fond à 'yellow'
  }

  /**
   * Événement déclenché lorsque la souris quitte l'élément.
   */
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null); // Rétablit la couleur de fond par défaut
  }

  /**
   * Modifie la couleur de fond de l'élément.
   * @param color La couleur de fond ou null pour revenir à la couleur par défaut.
   */
  private highlight(color: string|null) {
    this.el.nativeElement.style.backgroundColor = color; // Modifie la propriété CSS 'background-color' de l'élément
  }

}

