# 隐性知识：底层操作系统 (Tacit Knowledge Education Platform)

本平台基于 [Docusaurus](https://docusaurus.io/) 构建，包含：
- **核心课程（全16课）**：权力运作、规则逻辑、关系网络、信息差、阶层习性与博弈防御。
- **经典专栏（经典研读）**：
  - 安妮特·拉鲁《不平等的童年》（*Unequal Childhoods*）全章社会学译注与瑞士教育实操。
  - 保罗·福塞尔《格调：社会阶级与生活品味》（*Class*）全章译注与瑞士文化本土化适配。

---

## 本地开发与运行 (Local Development)

### 1. 安装依赖
```bash
npm install
```

### 2. 启动本地开发服务
```bash
npm run start
```
服务将在 `http://localhost:3000` 启动。

### 3. 本地静态构建
```bash
npm run build
```
编译产物输出至 `build/` 目录。

---

## 容器化部署 (Docker & Docker Compose)

本项目已封装为多阶段轻量级 Docker 镜像，采用 Alpine Linux 与 Nginx 1.27 进行生产静态托管，支持客户端路由、Gzip 压缩与长效缓存策略。

### 方式一：使用 Docker Compose（推荐）

#### 1. 一键启动容器
```bash
docker compose up -d --build
```

#### 2. 自定义端口运行（可选）
如果需要将外部端口改为其他端口（例如 8080）：
```bash
PORT=8080 docker compose up -d --build
```
或者复制 `.env.example` 为 `.env` 并修改 `PORT` 变量。

#### 3. 查看运行状态与日志
```bash
docker compose ps
docker compose logs -f
```

#### 4. 停止并移除容器
```bash
docker compose down
```

---

### 方式二：使用原生 Docker 命令

#### 1. 构建 Docker 镜像
```bash
docker build -t education-platform:latest .
```

#### 2. 运行 Docker 容器
```bash
docker run -d \
  --name education-platform \
  --restart unless-stopped \
  -p 3000:80 \
  education-platform:latest
```

#### 3. 验证服务健康状态
```bash
curl -I http://localhost:3000/healthz
```
服务返回 `HTTP/1.1 200 OK` 且内容为 `healthy`。
