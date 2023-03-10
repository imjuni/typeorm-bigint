# TypeORM bigint transformer not working reproducable

## reproduce

```bash
# Clone the boilerplate:
git clone --depth=1 \
  https://github.com/imjuni/typeorm-bigint.git \
  typeorm-bigint

cd typeorm-bigint

npm install

# You have to change database configuration on `src/db/superHeroDs.ts` file.

npm run syn
npm run dev -- ./src/random.ts

# transformer not working
npm run dev -- ./src/select.ts

# raw working, raw object direct pass on where function
npm run dev -- ./src/select_raw.ts
```
