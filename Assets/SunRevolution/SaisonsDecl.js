// Définition des 4 saisons

// Debut de l'animation
final static var debut = SunParam(0.0, Color.white, 0.0);
// Fin de l'animation
final static var fin = SunParam(1.0, Color.white, 0.0);

/*
	Fonctionnement :
	
		Créez un tableau (Array) pour chaque saison contenant les triggers d'arret
			new SunTrigger("nom", SunParam);
*/

final static var saisonPrintemps = new SunSeason("soleil_test", new Array(
	new SunTrigger("Début animation", debut),
	new SunTrigger("Aube", new SunParam(0.32, Color.white, 0.2)),
	new SunTrigger("Zénith", new SunParam(0.48, Color.white, 0.95)),
	new SunTrigger("Crépuscule", new SunParam(0.80, Color.white, 0.3)),
	new SunTrigger("Fin animation", fin)));
	
final static var saisonEte = new SunSeason("soleil_test", new Array(
	new SunTrigger("Début animation", debut),
	new SunTrigger("Aube", new SunParam(0.32, Color.white, 0.2)),
	new SunTrigger("Zénith", new SunParam(0.48, Color.white, 0.95)),
	new SunTrigger("Crépuscule", new SunParam(0.80, Color.white, 0.3)),
	new SunTrigger("Fin animation", fin)));
	
final static var saisonAutomne = new SunSeason("soleil_test", new Array(
	new SunTrigger("Début animation", debut),
	new SunTrigger("Aube", new SunParam(0.32, Color.white, 0.2)),
	new SunTrigger("Zénith", new SunParam(0.48, Color.white, 0.95)),
	new SunTrigger("Crépuscule", new SunParam(0.80, Color.white, 0.3)),
	new SunTrigger("Fin animation", fin)));
	
final static var saisonHiver = new SunSeason("soleil_test", new Array(
	new SunTrigger("Début animation", debut),
	new SunTrigger("Aube", new SunParam(0.32, Color.white, 0.2)),
	new SunTrigger("Zénith", new SunParam(0.48, Color.white, 0.95)),
	new SunTrigger("Crépuscule", new SunParam(0.80, Color.white, 0.3)),
	new SunTrigger("Fin animation", fin)));