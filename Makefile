REPORTER = spec

test-tdd:
	@./node_modules/.bin/mocha \
    --reporter $(REPORTER) \
    --ui tdd \
    test/tdd/*.js

test-bdd:
	@./node_modules/.bin/mocha \
    --reporter $(REPORTER) \
    --require should \
    --ui bdd \
    test/*.js

test-bdd-coffee:
	@./node_modules/.bin/mocha \
    --compilers coffee:coffee-script \
    --reporter $(REPORTER) \
    --require should \
    --ui bdd \
    test/*.coffee


test-all:   test-bdd test-bdd-coffee
