
package Task2;

import java.util.ArrayList;
import java.util.List;

class BTreeNode {
    List<Integer> keys;
    List<BTreeNode> children;
    boolean isLeaf;

    public BTreeNode(boolean isLeaf) {
        this.isLeaf = isLeaf;
        this.keys = new ArrayList<>();
        this.children = new ArrayList<>();
    }
}

public class BTree {
    private BTreeNode root;
    private final int t = 2;
    public BTree() {
        this.root = new BTreeNode(true);
    }

    public void insert(int key) {
        BTreeNode r = root;
        if (r.keys.size() == 2 * t - 1) {
            BTreeNode s = new BTreeNode(false);
            s.children.add(r);
            splitChild(s, 0);
            root = s;
        }
        insertNonFull(root, key);
    }

    private void insertNonFull(BTreeNode node, int key) {
        int i = node.keys.size() - 1;
        if (node.isLeaf) {
            node.keys.add(0);
            while (i >= 0 && key < node.keys.get(i)) {
                node.keys.set(i + 1, node.keys.get(i));
                i--;
            }
            node.keys.set(i + 1, key);
        } else {
            while (i >= 0 && key < node.keys.get(i)) {
                i--;
            }
            i++;
            if (node.children.get(i).keys.size() == 2 * t - 1) {
                splitChild(node, i);
                if (key > node.keys.get(i)) {
                    i++;
                }
            }
            insertNonFull(node.children.get(i), key);
        }
    }

    private void splitChild(BTreeNode parent, int i) {
        BTreeNode y = parent.children.get(i);
        BTreeNode z = new BTreeNode(y.isLeaf);
        parent.keys.add(i, y.keys.get(t - 1));
        z.keys.addAll(y.keys.subList(t, 2 * t - 1));
        y.keys.subList(t - 1, 2 * t - 1).clear();
        if (!y.isLeaf) {
            z.children.addAll(y.children.subList(t, 2 * t));
            y.children.subList(t, 2 * t).clear();
        }
        parent.children.add(i + 1, z);
    }

    public boolean search(int key) {
        return search(root, key);
    }

    private boolean search(BTreeNode node, int key) {
        int i = 0;
        while (i < node.keys.size() && key > node.keys.get(i)) {
            i++;
        }
        if (i < node.keys.size() && key == node.keys.get(i)) {
            return true;
        }
        if (node.isLeaf) {
            return false;
        }
        return search(node.children.get(i), key);
    }
}
