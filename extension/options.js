const badge = document.getElementById("badge");
const notification = document.getElementById("notification");
const max = document.getElementById("max");
const ignore_no_changelogs = document.getElementById("ignore_no_changelogs");

async function load() {
    const res = await browser.storage.local.get("options");
    badge.value = res.options.badge;
    notification.value = res.options.notification;
    max.value = res.options.max;
    ignore_no_changelogs.value = res.options.ignore_no_changelogs;
}

async function save() {
    browser.storage.local.set({
        options: {
            badge: JSON.parse(badge.value),
            notification: JSON.parse(notification.value),
            max: parseInt(max.value),
            ignore_no_changelogs: JSON.parse(ignore_no_changelogs.value)
        }
    })
}

document.addEventListener("DOMContentLoaded", load)
document.addEventListener("change", save)
