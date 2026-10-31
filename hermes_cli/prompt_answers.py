"""Exact localized yes/no answers shared by interactive CLI prompts."""

from agent.i18n import t


def parse_yes_no(value: str, default: bool | None = None) -> bool | None:
    """Return a decision without treating an unknown word as permission."""
    answer = value.strip().casefold()
    if not answer:
        return default
    denied = {word.strip().casefold() for word in t("cli.shared.no_words").split(",")}
    allowed = {word.strip().casefold() for word in t("cli.shared.yes_words").split(",")}
    allowed.add(t("cli.shared.yes_initial").strip().casefold())
    if answer in denied | {"n", "no", "cancel"}:
        return False
    if answer in allowed | {"y", "yes"}:
        return True
    return None
