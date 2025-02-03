function getTimestamp() {
    let iso = new Date().toISOString();
    let str = iso.replace(/[T:-]/g, "");
    return str.replace(/\..*/, "");
}

function gdjournal() {
    const text = document.getElementById("textarea").value;
    const blob = new Blob([text], {type: "text/plain"});
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = getTimestamp() + ".txt";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(link.href);
}
