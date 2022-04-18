using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UIElements;
using UnityEngine.SceneManagement;

public class UIManager : MonoBehaviour {

    public GameObject entry;
    public GameObject unitList;
    public GameObject unitOverview;
    public GameObject flashcardList;
    public GameObject flashcard;

    // Start is called before the first frame update
    void Start() {
        
    }

    public void SwitchScreen(GameObject from, GameObject to) {
        from.SetActive(false);
        to.SetActive(true);
    }
}
