/* 
 * @Name : CandleLight.cs 
 * @Desc : Variation lumieres en fonction de intensité et/ou rayon. Variation Random / Sinusoidale 
 * @TODO : random param speed + variation sinusoidale continue random
 * @Params : 
 * @Author : Cyrille Delabre
 */
using UnityEngine;
using System.Collections;
[RequireComponent( typeof( Light ) )]

public class CandleLight : MonoBehaviour
{
	/*
	 * @Params Menu
	 */
	public enum Lumiere { Default = 0};
	public enum LightReglages { Intensity = 0, Range = 1, Both = 2 }; // On joue avec la lumiere par intensité / rayon / les deux 
	public enum IntensiteVariations { Sinus = 0, Random = 1 }; // Choix Intensité Styles
	public enum RangeVariations { Sinus = 0, Random = 1 }; // Choix Range Styles
	/*
	 * Default Enum Values : Type Bougie
	 */
	public Lumiere Type = Lumiere.Default; // default
	public LightReglages Reglages = LightReglages.Both; // both
	public IntensiteVariations IntensiteVariation = IntensiteVariations.Random; //random intensité
	public RangeVariations RangeVariation = RangeVariations.Sinus; // sinus range
	
	//Valeurs de base
	// Intensity Value /default
	public float IntensityBaseValue = 0.25f; // On remplace la valeur definie 
	public float IntensityIntervalle = 0.05f; //Intervalle
	// Range Value /default
	public float RangeBaseValue = 3.0f; // On remplace la valeur definie 
	public float RangeIntervalle = 0.15f; // Intervalle
	
	//  Speed (Sinus or Random)
	public float RangeSpeed = 4f;
	public float IntensitySpeed = 10f; 
	
	
	
	/* Private 
	 */
	// Cycle Sinus
	private float CycleIntensity = 0.0f;
	private float CycleRange = 0.0f;
	// Speed Frame Refresh Random
	private float CurrentIntensitySpeed = 0;
	private float CurrentRangeSpeed = 0;
	// Defalt intervalle 0 - 15 / decrémentation 1f 
	private float DefaultCurrentSpeedValue = 15f;
	// Use this for initialization
	void Start () {
	}
	
	// Update is called once per frame
	void Update () {
		switch( Type )
		{
		case Lumiere.Default:
			
			// Intensité OR both
			if( Reglages == LightReglages.Intensity || Reglages == LightReglages.Both )
			{
				if( IntensiteVariation == IntensiteVariations.Sinus )  // If Intensity style is Sinus
				{
					CycleIntensity += IntensitySpeed; // Cycle Length
					if( CycleIntensity > 360.0f ) CycleIntensity = 0.0f;
					// Base + Values
					light.intensity = IntensityBaseValue + ( ( Mathf.Sin( CycleIntensity * Mathf.Deg2Rad ) * ( IntensityIntervalle / 2.0f ) ) + ( IntensityIntervalle / 2.0f ) );
				}
				else
				{// If Intensity style is Random
					if(CurrentIntensitySpeed < IntensitySpeed){
						light.intensity = IntensityBaseValue + Random.Range( 0.0f, IntensityIntervalle );
						CurrentIntensitySpeed = DefaultCurrentSpeedValue; // intervalle 0-15f 
					}else CurrentIntensitySpeed -=1f;
				}
			}
			
			/****/
			
			// Range OR Both
			if( Reglages == LightReglages.Range || Reglages== LightReglages.Both )
			{
				// If Range style is Sinus
				if( RangeVariation == RangeVariations.Sinus )
				{
					
					CycleRange += RangeSpeed; // Cycle Length
					if( CycleRange > 360.0f ) CycleRange = 0.0f;
					
					// Base + Values
					light.range = RangeBaseValue + ( ( Mathf.Sin( CycleRange * Mathf.Deg2Rad ) * ( RangeIntervalle / 2.0f ) ) + ( RangeIntervalle / 2.0f ) );
				}
				else
				{// If Range style is Random
					if(CurrentRangeSpeed < IntensitySpeed){
						light.range = RangeBaseValue + Random.Range( 0.0f, RangeIntervalle ); 
						CurrentRangeSpeed = DefaultCurrentSpeedValue ; 
					}else CurrentRangeSpeed -=1f;
				}
			}
			break;
			
			
		default:
			Debug.Log("Erreur Switch ");
			break;
		}
	}
}
