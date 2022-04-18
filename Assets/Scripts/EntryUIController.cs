using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UIElements;
using UnityEngine.SceneManagement;

public class EntryUIController : MonoBehaviour {

    private UIManager manager;

    public TextField nameField;
    public Button startButton;
    public Button settingsButton;

    // Start is called before the first frame update
    void OnEnable() {
        manager = transform.parent.transform.parent.GetComponent<UIManager>();

        var root = GetComponent<UIDocument>().rootVisualElement;

        nameField = root.Q<TextField>("NameField");

        startButton = root.Q<Button>("StartButton");
        startButton.clicked += StartButtonPressed;
        
        settingsButton = root.Q<Button>("SettingsButton");
        settingsButton.clicked += SettingsButtonPressed;
    }

    void StartButtonPressed() {
        manager.SwitchScreen(transform.parent.gameObject, manager.unitList);
    }

    void SettingsButtonPressed() {
        Debug.Log(nameField.value);
    }
}
