function lifeBar({ name, health }) {
  if (health > 50) {
    return name+' healthy';
  }
  if (health < 15) {
    return name+' critical';
  }
  return name+' wounded';
}

export default lifeBar