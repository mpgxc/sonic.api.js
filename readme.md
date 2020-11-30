### Postgres

```
$ docker run --restart=always --name sonic_postgres -e POSTGRES_PASSWORD=sonic_pass -p 5432:5432 -d postgres
```

### Sonic

```
$ docker run -p 1491:1491 -v /path/to/your/sonic/config.cfg:/etc/sonic.cfg -v /path/to/your/sonic/store/:/var/lib/sonic/store/ -d  valeriansaliou/sonic:v1.3.0

```

### Meu caso

- **CONFIG:** ~/Documentos/API\ Sonic/sonic/sonic.cfg
- **STORE:** ~/Documentos/API\ Sonic/sonic/store
