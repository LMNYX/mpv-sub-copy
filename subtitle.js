var doCopy = true;

function on_subtitle(name, value)
{
    isVisible = mp.get_property("sub-visibility") == "yes";
    if (!isVisible || value == "")
        return;
    mp.commandv("run", "powershell", "set-clipboard", value);
}

function switchCopy()
{
    doCopy = !doCopy;
    mp.osd_message("Subtitle copy " + (doCopy ? "enabled" : "disabled"));
}

mp.observe_property("sub-text", "string", on_subtitle);
mp.add_key_binding("Ctrl+c", "switchSubCopy", switchCopy);