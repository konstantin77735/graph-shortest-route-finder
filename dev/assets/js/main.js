// Model
class GraphModel {
  constructor(matrix, startVertex, endVertex) {
    this.matrix = matrix;
    this.startVertex = startVertex - 1; // 0-based
    this.endVertex = endVertex - 1; // 0-based
    this.steps = []; // Массив для хранения шагов
  }

  // Алгоритм Дейкстры с пошаговым описанием
  dijkstra() {
    const n = this.matrix.length;
    const distances = Array(n).fill(Infinity);
    const predecessors = Array(n).fill(null);
    const visited = Array(n).fill(false);

    distances[this.startVertex] = 0;

    // Шаг 1: Инициализация
    //this.steps.push(`Инициализация: Устанавливаем расстояние до начальной вершины ${this.startVertex + 1} равным 0, до остальных — бесконечность.`);

    for (let i = 0; i < n; i++) {
      // Находим необработанную вершину с минимальным расстоянием
      let minDist = Infinity;
      let u = -1;
      for (let j = 0; j < n; j++) {
        if (!visited[j] && distances[j] < minDist) {
          minDist = distances[j];
          u = j;
        }
      }

      if (u === -1) {
        this.steps.push(`Все вершины обработаны.`);
        break;
      }

      visited[u] = true;

      // Шаг 2: Обрабатываем вершину
      this.steps.push(`Обрабатываем вершину ${u + 1} с текущим минимальным расстоянием ${distances[u]}.`);

      // Обновляем расстояния до соседей
      let neighborsUpdated = false;
      for (let v = 0; v < n; v++) {
        if (!visited[v] && this.matrix[u][v] !== 0) {
          const newDist = distances[u] + this.matrix[u][v];
          if (newDist < distances[v]) {
            distances[v] = newDist;
            predecessors[v] = u;
            neighborsUpdated = true;
            // Формируем путь для отображения
            const path = [];
            let current = v;
            while (current !== null) {
              path.unshift(current + 1); // 1-based
              current = predecessors[current];
            }
            this.steps.push(`Ребро: ${path.join(' → ')}, вес ребра ${this.matrix[u][v]}`);
          
          }
        }
      }

      if (!neighborsUpdated) {
        this.steps.push(`У вершины ${u + 1} нет необработанных соседей с возможностью улучшения расстояния.`);
      }

      // Проверяем, достигли ли конечной вершины
      if (u === this.endVertex) {
        this.steps.push(`Достигли конечной вершины ${u + 1}. Завершаем алгоритм.`);
        break;
      }
    }

    // Восстанавливаем путь
    const path = [];
    let current = this.endVertex;
    while (current !== null) {
      path.unshift(current + 1); // 1-based
      current = predecessors[current];
    }

    // Проверяем альтернативные пути
    const directPathWeight = this.matrix[this.startVertex][this.endVertex];
    if (directPathWeight !== 0) {
      this.steps.push(`Проверяем прямой путь ${this.startVertex + 1} → ${this.endVertex + 1}: вес ${directPathWeight}.`);
    }

    // Проверяем путь через промежуточные вершины (например, через вершину 5, как в примере)
    for (let mid = 0; mid < n; mid++) {
      if (mid !== this.startVertex && mid !== this.endVertex) {
        const path1 = this.matrix[this.startVertex][mid];
        const path2 = this.matrix[mid][this.endVertex];
        if (path1 !== 0 && path2 !== 0) {
          const total = path1 + path2;
          this.steps.push(`Проверяем путь ${this.startVertex + 1} → ${mid + 1} → ${this.endVertex + 1}: ${this.startVertex + 1} → ${mid + 1} (вес ${path1}), ${mid + 1} → ${this.endVertex + 1} (вес ${path2}), итого ${total}.`);
        }
      }
    }

    this.steps.push(`Итоговый кратчайший путь: ${path.join(' → ')}, длина пути: ${distances[this.endVertex]}.`);

    return {
      path: path,
      distance: distances[this.endVertex],
      steps: this.steps
    };
  }
}

// View
class GraphView {
  displayResult(path, distance) {
    const resultElement = document.getElementById('result');
    if (path.length === 0 || distance === Infinity) {
      resultElement.textContent = 'Путь между вершинами не существует.';
    } else {
      resultElement.textContent = `Кратчайший путь: ${path.join(' → ')}\nДлина пути: ${distance}`;
    }
  }

  displaySteps(steps) {
    const stepsElement = document.getElementById('steps');
    stepsElement.innerHTML = ''; // Очищаем предыдущие шаги
    steps.forEach(step => {
      const li = document.createElement('li');
      li.textContent = step;
      stepsElement.appendChild(li);
    });
  }

  displayError(message) {
    const resultElement = document.getElementById('result');
    resultElement.textContent = `Ошибка: ${message}`;
    const stepsElement = document.getElementById('steps');
    stepsElement.innerHTML = ''; // Очищаем шаги при ошибке
  }
}


// Controller
class GraphController {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    this.init();
  }

  init() {
    const solveButton = document.getElementById('solve-button');
    solveButton.addEventListener('click', () => this.handleSolve());
  }

  handleSolve() {
    const matrixInput = document.getElementById('matrix').value.trim();
    const startVertex = parseInt(document.getElementById('start-vertex').value);
    const endVertex = parseInt(document.getElementById('end-vertex').value);

    // Валидация
    const rows = matrixInput.split('\n').filter(row => row.trim() !== '');
    const n = rows.length;
    if (n === 0) {
      this.view.displayError('Матрица не должна быть пустой.');
      return;
    }

    const matrix = [];
    for (let rowIdx = 0; rowIdx < n; rowIdx++) {
      const row = rows[rowIdx];
      // Разделяем строку по пробелам и убираем лишние пробелы
      const digits = row.trim().split(/\s+/).map(Number);
      if (digits.length !== n || digits.some(isNaN)) {
        this.view.displayError(`Каждая строка должна содержать ровно ${n} чисел, разделённых пробелами.`);
        return;
      }
      if (digits.some(d => d < 0)) {
        this.view.displayError('Числа в матрице не могут быть отрицательными.');
        return;
      }
      matrix.push(digits);
    }

    if (startVertex < 1 || startVertex > n || endVertex < 1 || endVertex > n) {
      this.view.displayError(`Вершины должны быть числами от 1 до ${n}.`);
      return;
    }

    // Создаем модель и решаем задачу
    const model = new GraphModel(matrix, startVertex, endVertex);
    const { path, distance, steps } = model.dijkstra();
    this.view.displayResult(path, distance);
    this.view.displaySteps(steps);
  }
}

// Инициализация приложения
document.addEventListener('DOMContentLoaded', () => {
  const model = new GraphModel([], 1, 2);
  const view = new GraphView();
  const controller = new GraphController(model, view);
});