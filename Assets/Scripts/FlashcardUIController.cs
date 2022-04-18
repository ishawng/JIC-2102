using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UIElements;

public class FlashcardUIController : MonoBehaviour {

    private UIManager manager;

    public Button backButton;
    public Button wordButton;
    public Button leftButton;
    public Button rightButton;

    private bool isTerm;

    private List<(string, string)> flashcards;
    private int flashcardIndex;

    void OnEnable() {
        manager = transform.parent.transform.parent.GetComponent<UIManager>();

        VisualElement root = GetComponent<UIDocument>().rootVisualElement;

        backButton = root.Q<Button>("BackButton");
        backButton.clicked += BackButtonPressed;

        wordButton = root.Q<Button>("WordButton");
        wordButton.clicked += WordButtonPressed;

        flashcardIndex = 0;
        wordButton.text = flashcards[flashcardIndex].Item1;
        isTerm = true;

        leftButton = root.Q<Button>("LeftButton");
        leftButton.clicked += LeftButtonPressed;
        leftButton.SetEnabled(false);

        rightButton = root.Q<Button>("RightButton");
        rightButton.clicked += RightButtonPressed;
    }

    void BackButtonPressed() {
        manager.SwitchScreen(transform.parent.gameObject, manager.flashcardList);
    }

    void WordButtonPressed() {
        isTerm = !isTerm;
        wordButton.text = isTerm ? flashcards[flashcardIndex].Item1 : flashcards[flashcardIndex].Item2;
    }

    void LeftButtonPressed() {
        flashcardIndex--;
        UpdateFlashcard();
    }

    void RightButtonPressed() {
        flashcardIndex++;
        UpdateFlashcard();
    }

    void UpdateFlashcard() {
        if (flashcardIndex == 0) {
            leftButton.SetEnabled(false);
        } else {
            leftButton.SetEnabled(true);
        }
        if (flashcardIndex == flashcards.Count - 1) {
            rightButton.SetEnabled(false);
        } else {
            rightButton.SetEnabled(true);
        }

        wordButton.text = flashcards[flashcardIndex].Item1;
    }

    public void UpdateFlashcards(List<(string, string)> flashcards) {
        this.flashcards = flashcards;
    }

}
