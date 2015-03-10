#pragma strict
import SunSeason;
import SaisonsDecl;

// Durée par défaut des animations
static final var DURATION = 10;

// Liste des modes
public enum DisplayMode {
	Incremental, Continu
}

// Paramètres
private var soleil : GameObject;
private var saisonActuelle : SunSeason;

var nomSoleil: String = "Soleil";
var saison : Saisons;
var mode : DisplayMode;
var vitesseAnimation = 1.0;
var coefficientIntensite = 1.0;

var triggerInferieur: String;
var triggerSuperieur: String;


// Variables utiles à la fonction Update
private var Timer = 0.0;
private var currentProgression: float;
private var currentPhase: SunParam;
private var prevPonderation: float = 0.0;

function Start () {

	// On récupère notre soleil
	soleil = GameObject.Find(nomSoleil);
	
	// On instancie notre propre copie de la saison que l'on souhaite visualiser
	if (saison == Saisons.Printemps) saisonActuelle = new SunSeason(saisonPrintemps);
	else if (saison == Saisons.Ete) saisonActuelle = new SunSeason(saisonEte);
	else if (saison == Saisons.Automne) saisonActuelle = new SunSeason(saisonAutomne);
	else saisonActuelle = new SunSeason(saisonHiver);
	
	// On démarre l'animation
	animation.Play(saisonActuelle.Anim);
	animation[saisonActuelle.Anim].speed = vitesseAnimation;
}

function Update () {

	// On réenclenche l'animation si on presse la touche adéquat
	if (!animation[saisonActuelle.Anim].enabled && Input.GetKeyDown("c"))
	{
		animation[saisonActuelle.Anim].enabled = true;
		animation[saisonActuelle.Anim].speed = vitesseAnimation;
	}

	// MàJ globale de l'animation si celle ci est en cours d'exécution
	if (animation[saisonActuelle.Anim].enabled)
	{
		// On incrémente le Timer uniquement si l'animation est en cours
		Timer += Time.deltaTime;
		
		// MàJ de la progression et vérification que l'animation a été jouée
		currentProgression = Timer/vitesseAnimation/(DURATION/2);
		if (currentProgression >= 1.0)
		{
			animation.Rewind(saisonActuelle.Anim);
			currentProgression = 0.0;
			Timer = 0.0;
		}
		
		// Récupération de l'état courant (avec intensité et couleur calculées)
		currentPhase = saisonActuelle.getCurrentPhase(currentProgression);
		
		// Gestion du mode pause : s'il y a eu un changement de phase
		if (mode == DisplayMode.Incremental && currentPhase.ponderation < prevPonderation)
		{
			animation[saisonActuelle.Anim].speed = 0.0;
			animation[saisonActuelle.Anim].enabled = false;
		}
		prevPonderation = currentPhase.ponderation;

		// MàJ soleil
		soleil.light.intensity = currentPhase.intensity*coefficientIntensite;
		soleil.light.color = currentPhase.color;
		
		// MàJ affichage des triggers
		triggerInferieur = currentPhase.phase[0];
		triggerSuperieur = currentPhase.phase[1];
	}
}