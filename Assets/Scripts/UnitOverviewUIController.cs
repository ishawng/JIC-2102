using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UIElements;

public class UnitOverviewUIController : MonoBehaviour {

    private UIManager manager;

    private string unitNumber;
    private string unitName;
    private string description;

    public Label unitNumberLabel;
    public Label unitNameLabel;
    public Label descriptionLabel;
    public Button backButton;
    public Button startGameButton;
    public Button cardsButton;
    public Button scoresButton;

    void OnEnable() {
        manager = transform.parent.transform.parent.GetComponent<UIManager>();

        var root = GetComponent<UIDocument>().rootVisualElement;

        unitNumberLabel = root.Q<Label>("UnitNumber");
        unitNumberLabel.text = unitNumber;

        unitNameLabel = root.Q<Label>("UnitName");
        unitNameLabel.text = unitName;

        descriptionLabel = root.Q<Label>("Description");
        descriptionLabel.text = description;

        backButton = root.Q<Button>("BackButton");
        backButton.clicked += BackButtonPressed;

        startGameButton = root.Q<Button>("StartGameButton");
        startGameButton.clicked += StartGameButtonPressed;
        
        cardsButton = root.Q<Button>("CardsButton");
        cardsButton.clicked += CardsButtonPressed;

        scoresButton = root.Q<Button>("ScoresButton");
        scoresButton.clicked += ScoresButtonPressed;
    }

    void BackButtonPressed() {
        manager.SwitchScreen(transform.parent.gameObject, manager.unitList);
    }

    void StartGameButtonPressed() {
        Debug.Log("Start game pressed");
    }

    void CardsButtonPressed() {
        // 5 in substring to represent length of "Unit " (trimming unit to get just unit number)
        manager.flashcardList.GetComponentInChildren<FlashcardListUIController>().UpdateFlashcards(int.Parse(unitNumber.Substring(5)));
        manager.SwitchScreen(transform.parent.gameObject, manager.flashcardList);
    }

    void ScoresButtonPressed() {
        Debug.Log("Scores pressed");
    }

    public void UpdateUnit(string unitNumber, string unitName, string description) {
        this.unitNumber = unitNumber;
        this.unitName = unitName;
        this.description = description;
    }

}
