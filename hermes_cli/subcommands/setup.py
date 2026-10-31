"""``hermes setup`` subcommand parser."""

from __future__ import annotations

from typing import Callable

from agent.i18n import t


def build_setup_parser(subparsers, *, cmd_setup: Callable) -> None:
    """Attach the ``setup`` subcommand to ``subparsers``."""
    setup_parser = subparsers.add_parser(
        "setup", help=t('cli.setup.help.setup'),
        description=t('cli.setup.help.setup_description'))
    setup_parser.add_argument(
        "section", nargs="?",
        choices=["model", "tts", "terminal", "gateway", "tools", "telemetry", "agent"],
        default=None, help=t('cli.setup.help.section'))
    setup_parser.add_argument(
        "--non-interactive", action="store_true",
        help=t('cli.setup.help.noninteractive'))
    setup_parser.add_argument(
        "--reset", action="store_true", help=t('cli.setup.help.reset'))
    setup_parser.add_argument(
        "--reconfigure", action="store_true",
        help=t('cli.setup.help.reconfigure'))
    setup_parser.add_argument(
        "--quick", action="store_true",
        help=t('cli.setup.help.quick'))
    setup_parser.add_argument(
        "--portal", action="store_true",
        help=t('cli.setup.help.portal'))
    setup_parser.set_defaults(func=cmd_setup)
