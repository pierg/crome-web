import os

import dill as dill
from src.crome_cgg.cgg import Cgg
from src.crome_cgg.goal import Goal
from src.crome_synthesis.world import World

from src.backend.shared.paths import persistence_path


def _make_path(folder_name: str = ""):
    if not os.path.exists(persistence_path / folder_name):
        os.makedirs(persistence_path / folder_name)


def dump_cgg(cgg: Cgg, folder_name: str = ""):
    """Create a save of the cgg object inside a folder.

    It saves the object inside the persistence path.
    Arguments:
        cgg: The cgg object to save.
        folder_name: The name of the folder.
    """
    _make_path(folder_name)

    with open(persistence_path / folder_name / "cgg.dat", "wb") as stream:
        dill.dump(cgg, stream)


def load_cgg(folder_name: str = "") -> Cgg | None:
    """Retrieve the cgg object that has been saved.

    Arguments:
        folder_name: The name of the folder.

    Returns:
        The cgg object if it is found, otherwise None.
    """
    if not os.path.exists(persistence_path / folder_name / "cgg.dat"):
        return None

    with open(persistence_path / folder_name / "cgg.dat", "rb") as stream:
        cgg = dill.load(stream)
    return cgg


def dump_world(world: World, folder_name: str = ""):
    """Create a save of the world object inside a folder. It saves the object
    inside the persistence path.

    Arguments:
        world: The world object to save.
        folder_name: The name of the folder.
    """
    _make_path(folder_name)

    file = persistence_path / folder_name / "world.dat"

    with open(file, "wb") as stream:
        dill.dump(world, stream)

    print(f"{file} saved correctly")


def load_world(folder_name: str = "") -> World | None:
    """Retrieve the World object that has been saved.

    Arguments:
        folder_name: The name of the folder.

    Returns:
        The world object if it is found, otherwise None.
    """
    if not os.path.exists(persistence_path / folder_name / "world.dat"):
        return None

    with open(persistence_path / folder_name / "world.dat", "rb") as stream:
        world = dill.load(stream)
    return world


def dump_goals(goals: set[Goal], folder_name: str = ""):
    """Create a save of the set of goals objects inside a folder.

    It saves the object inside the persistence path.
    Arguments:
        goals: The set of goals objects to save.
        folder_name: The name of the folder.
    """
    _make_path(folder_name)

    with open(persistence_path / folder_name / "goals.dat", "wb") as stream:
        dill.dump(goals, stream)


def load_goals(folder_name: str = "") -> set[Goal] | None:
    """Retrieve the set of goals objects that has been saved.

    Arguments:
        folder_name: The name of the folder.

    Returns:
        The set og goals if it is found, otherwise None.
    """
    if not os.path.exists(persistence_path / folder_name / "goals.dat"):
        return None

    with open(persistence_path / folder_name / "goals.dat", "rb") as stream:
        goals = dill.load(stream)
    return goals
