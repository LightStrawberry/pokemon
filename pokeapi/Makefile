install:
	pip3 install -r requirements.txt

dev-install:
	pip3 install -r test-requirements.txt

lint:
	pylint config data pokemon_v2 --load-plugins pylint_django

setup:
	python3 manage.py migrate --settings=config.local
	python3 manage.py loaddata dev-data.json --settings=config.local

wipe_db:
	rm -rf db.sqlite3

serve:
	python3 manage.py runserver --settings=config.local 0.0.0.0:8000

test:
	python3 manage.py test --settings=config.local

clean:
	find . -type f -name '*.pyc' -delete

migrate:
	python3 manage.py migrate --settings=config.local
