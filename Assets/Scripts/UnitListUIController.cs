using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UIElements;
using UnityEngine.SceneManagement;

public class UnitListUIController : MonoBehaviour {
    
    private UIManager manager;

    public Button backButton;
    public Button[] unitButtons;

    public string[] unitNames;
    public string[] unitDescriptions;

    void OnEnable() {
        manager = transform.parent.transform.parent.GetComponent<UIManager>();

        VisualElement root = GetComponent<UIDocument>().rootVisualElement;

        backButton = root.Q<Button>("BackButton");
        backButton.clicked += BackButtonPressed;

        ScrollView scrollView = root.Q<ScrollView>("UnitScrollView");
        unitButtons = new Button[scrollView.contentContainer.childCount];

        for (int i = 0; i < unitButtons.Length; i++) {
            int index = i; // wack way to pass the index into the lambda because of the scope of the loop
            unitButtons[index] = root.Q<Button>("Unit" + (index + 1));
            unitButtons[index].clicked += (() => UnitButtonPressed(index + 1));
        }
    }

    void BackButtonPressed() {
        manager.SwitchScreen(transform.parent.gameObject, manager.entry);
    }

    void UnitButtonPressed(int unitNumber) {
        manager.unitOverview.GetComponentInChildren<UnitOverviewUIController>().UpdateUnit("Unit " + unitNumber, unitNames[unitNumber - 1], unitDescriptions[unitNumber - 1]);
        manager.SwitchScreen(transform.parent.gameObject, manager.unitOverview);
    }

}
