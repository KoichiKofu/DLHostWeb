import React from 'react';

function TransformFromGBinMachines(memory) {
    var list_memory = [];
    for (var x = memory; x > 0; x--) {
        list_memory.push(x);
    }
    return list_memory.map(m => <img key={m} src="/images/hpe.png" alt="machine" className="machine" style={{ zIndex: m }} />);
}

export default TransformFromGBinMachines;