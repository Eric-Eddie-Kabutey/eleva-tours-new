include .env
export $(shell sed 's/=.*//' .env)


dc-up:
	docker-compose up -d --build

dc-up-with-logs:
	docker-compose up --build

dc-down:
	docker-compose down

git-update:
	git pull origin main

nginx-reload:
	sudo systemctl daemon-reload
	sudo nginx -t && sudo systemctl restart nginx

deploy:
	make git-update && \
	make dc-down && \
	make dc-up && \
	make nginx-reload