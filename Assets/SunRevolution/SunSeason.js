// Liste des saisons
public enum Saisons {
	Printemps, Ete, Automne, Hiver
}

// Classe permettant de grouper les paramètres
public class SunParam {
	var ponderation : float;
	var phase : Array; // Nom des deux trigger entre lesquelles on se situe
	var progression : float;
	var color : Color;
	var intensity : float;
	
	// Constructeur utilisé lors de la déclaration des saisons/triggers
	function SunParam(progression:float, couleur:Color, intensity:float)
	{
		this.progression = progression;
		this.color = couleur;
		this.intensity = intensity;
	}
	
	// Constructeur utilisé pour la MàJ des paramètres du soleil
	function SunParam(ponderation:float, phase:Array, progression:float, couleur:Color, intensity:float)
	{
		this.ponderation = ponderation;
		this.phase = phase;
		this.progression = progression;
		this.color = couleur;
		this.intensity = intensity;
	}
}

// Classe permettant de définir un trigger
public class SunTrigger {
	var nom: String;
	var params: SunParam;
	
	function SunTrigger(nom:String, params:SunParam)
	{
		this.nom = nom;
		this.params = params;
	}
}

public class SunSeason {

	var Anim: String;
	var Triggers: Array;
	
	// Nouvelle méthode
	function SunSeason(animation: String, triggers:Array)
	{
		this.Anim = animation;
		this.Triggers = triggers;
	}
	
	// Constructeur par copie
	function SunSeason(cpy:SunSeason)
	{
		return this(cpy.Anim, cpy.Triggers);
	}
	
	
	// Retourne la phase solaire actuelle
	function getCurrentPhase(currentProgression: float): SunParam
	{
		var prevTrigger: SunTrigger;
		var futureTrigger: SunTrigger;
		
		// On parcourt tout sauf le dernier élément (i+1 pour le futur) !
	    for (var i : int = 0 ; i < this.Triggers.length ; i++)
	    {
	    	prevTrigger = this.Triggers[i];
	    	
	    	// Si on est sur le dernier point, on prendra un futur et un passé identique
	    	if (i == this.Triggers.length-1)
		    	futureTrigger = prevTrigger;
	    	else
	    		futureTrigger = this.Triggers[i+1];
	    	
	    	// On a localisé les deux intervalles recherchés
	    	if (currentProgression >= prevTrigger.params.progression && currentProgression <= futureTrigger.params.progression)
	    	{
	    		var ponderation : float =
	    			(currentProgression - prevTrigger.params.progression) /
	    			(futureTrigger.params.progression - prevTrigger.params.progression);
	    			    	
	    		var currentColor: Color = evalColor(prevTrigger.params.color, futureTrigger.params.color, ponderation);
	    		var currentIntensity: float = evalIntensity(prevTrigger.params.intensity, futureTrigger.params.intensity, ponderation);
	    		
	    		return new SunParam(ponderation, new Array(prevTrigger.nom, futureTrigger.nom), currentProgression, currentColor, currentIntensity);
	    	}
	    }
    			
    	return null;
	}
	
	// Calcul de l'intensité moyenne pondérée
	private function evalIntensity(intensity1:float, intensity2:float, ponderation:float) : float
	{
		return intensity2 * ponderation + intensity1 * (1.0 - ponderation);
	}
	
	// Calcul de la couleur moyenne pondérée
	private function evalColor(color1:Color, color2:Color, ponderation:float) : Color
	{
		return new Color(
			color2.r * ponderation + color1.r * (1.0 - ponderation),
			color2.g * ponderation + color1.g * (1.0 - ponderation),
			color2.b * ponderation + color1.b * (1.0 - ponderation),
			color2.a * ponderation + color1.a * (1.0 - ponderation)
		);
	}
}
