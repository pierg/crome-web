# crome-web

Web Interface for the Contract-Based Goal Graph package.

## System Requirements

[Strix](https://strix.model.in.tum.de) must be installed on the system. Alternatively, a
[docker](https://www.docker.com) must be installed and running.

### Dependencies

Clone crome-logic, crome-contracts, crome-cgg and crome-synthesis from git in the same
folder where crome-web is located

```bash
git clone https://github.com/pierg/crome-logic.git
```

```bash
git clone https://github.com/pierg/crome-contracts.git
```

```bash
git clone https://github.com/pierg/crome-cgg.git
```

```bash
git clone https://github.com/pierg/crome-synthesis.git
```

Append it to PYTHONPATH

```bash
export PYTHONPATH=$PYTHONPATH:../crome-logic/:../crome-contracts/:../crome-cgg/:../crome-synthesis/
```

## Installation

We use
[conda](https://docs.conda.io/projects/conda/en/latest/user-guide/install/index.html) to
manage the environment and dependencies.

We use [pdm](https://github.com/pdm-project/pdm) to manage 'development' dependencies
(e.g. linting, type checking).


You need to install `conda-merge` so that we can merge all the dependecies from the other repositories and create the `environment.yml`
```bash
pip install conda-merge
```

Once `conda-merge` is installed, you can create the `envioronment.yml` file, create the environment and activate it by runnin the following commands:
```bash
make env-create
make env-install
make env-activate
```

Install the other dependencies with pdm (optional):

```bash
pdm install
```

## Documentation

You can generate the documentation of the project by running the following commands:

```bash
pdm install
make setup
make docs
```

## Docker

You can directly run the project by running the docker image on any platform

`docker run -it --platform linux/x86_64 pmallozzi/crome-web:dev`

### Building the image

To build the image you can run the following command

`docker buildx build --platform linux/x86_64 -t [DOCKERUSERNAME]/[PROJECT]:[TAG] --push .`

## One magic command

Run `make pre-commit` to run all the pre-commit tools

Check all the available commands in `Makefile`

## License

[MIT](https://github.com/piergiuseppe/crome-synthesis/blob/master/LICENSE)

## Features and Credits

- Fully typed with annotations and checked with mypy,
  [PEP561 compatible](https://www.python.org/dev/peps/pep-0o561/)

- This project has been initially generated with
  [`wemake-python-package`](https://github.com/wemake-services/wemake-python-package).
